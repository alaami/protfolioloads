import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { StyledPagePaper, StyledSliderBox, StyledSliderContentBox } from "../../../../../main/utils/customStyle";
import { useRouter } from "next/router";
import React from "react";
import { I18nContext } from "next-i18next";
import Divider from "@mui/material/Divider";
import { ListItem, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { StarBorderOutlined } from "@mui/icons-material";
import { ClientCarousel } from "../components/ClientCarousel";
const AboutView = (props: any) => {
    const { i18n: { language } } = useContext(I18nContext);
    const router = useRouter()
    const pathname = router.pathname;
    const page = props.aboutPage.filter(function (item) {
        return item.attributes.locale == language;
    });
    const theme = useTheme();
    let imageUrl = ''
    if (page != undefined) {
        imageUrl = page[0].attributes.cover.data.attributes.url;
    }
    return (
        <div className="App">

            {((page == undefined)) ? (
                <h1>Loading Page {pathname}</h1>
            ) :
                (page != undefined) && (
                    <Stack>
                        <StyledPagePaper elevation={0}>
                            <CardMedia
                                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                                image={imageUrl}
                                title={page[0].attributes.title}
                                sx={{ height: 600 }}
                            >
                                <StyledSliderBox>
                                    <StyledSliderContentBox>
                                        <h1>
                                            {page[0].attributes.title}
                                        </h1>
                                    </StyledSliderContentBox>
                                </StyledSliderBox>
                            </CardMedia>
                            <Grid container spacing={2} sx={{ padding: 5 }} >
                                <Grid item xs={12} md={7} key="content__body" sx={{ padding: 10 }}>
                                    <ReactMarkdown >{page[0].attributes.blocks[1].body}</ReactMarkdown>
                                </Grid>
                                <Grid item xs={12} md={5} key="content__help" sx={{ padding: 10 }}>
                                    <h2>
                                        {page[0].attributes.blocks[4].title}
                                    </h2>
                                    {page[0].attributes.blocks[4].servicecard!.map((service: any) => {
                                        return (
                                            <ListItem divider>
                                                <ListItemIcon>
                                                    <StarBorderOutlined />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={`${service.title}`} />
                                            </ListItem>

                                        );
                                    })}
                                </Grid>
                            </Grid>
                            <ClientCarousel clientItems={page[0].attributes.blocks[5].files.data} />
                            <Divider sx={{ borderBottomWidth: 3 }} />
                        </StyledPagePaper>
                    </Stack>

                )}

        </div>
    );
};
export default AboutView;
import { InlineKeyboard } from "grammy";
import env from "../env";

export const headers = { Cookie: env.COOKIES };

export const numberEmojis = new Map([
    [1, "➊"],
    [2, "➋"],
    [3, "➌"],
    [4, "➍"],
    [5, "➎"],
    [6, "➏"],
    [7, "➐"],
    [8, "➑"],
    [9, "➒"],
    [10, "➓"],
]);

export const panelOther = {
    disable_web_page_preview: true,
    reply_markup: new InlineKeyboard()
        .text("🔀", "panel_shuffle")
        .text("⏩", "panel_skip")
        .text("⏸", "panel_pause")
        .text("▶️", "panel_resume")
        .row()
        .text("🔇", "panel_mute")
        .text("🔈", "panel_unmute")
        .text("🔉", "panel_voldec")
        .text("🔊", "panel_volinc")
        .row()
        .text("🔄", "panel_update"),
};

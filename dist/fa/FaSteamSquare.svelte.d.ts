import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaSteamSquareProps = typeof __propDef.props;
export type FaSteamSquareEvents = typeof __propDef.events;
export type FaSteamSquareSlots = typeof __propDef.slots;
export default class FaSteamSquare extends SvelteComponentTyped<FaSteamSquareProps, FaSteamSquareEvents, FaSteamSquareSlots> {
}
export {};

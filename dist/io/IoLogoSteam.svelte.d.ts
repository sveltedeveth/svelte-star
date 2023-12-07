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
export type IoLogoSteamProps = typeof __propDef.props;
export type IoLogoSteamEvents = typeof __propDef.events;
export type IoLogoSteamSlots = typeof __propDef.slots;
export default class IoLogoSteam extends SvelteComponentTyped<IoLogoSteamProps, IoLogoSteamEvents, IoLogoSteamSlots> {
}
export {};

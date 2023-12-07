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
export type IoLogoTwitchProps = typeof __propDef.props;
export type IoLogoTwitchEvents = typeof __propDef.events;
export type IoLogoTwitchSlots = typeof __propDef.slots;
export default class IoLogoTwitch extends SvelteComponentTyped<IoLogoTwitchProps, IoLogoTwitchEvents, IoLogoTwitchSlots> {
}
export {};

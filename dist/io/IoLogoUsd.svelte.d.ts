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
export type IoLogoUsdProps = typeof __propDef.props;
export type IoLogoUsdEvents = typeof __propDef.events;
export type IoLogoUsdSlots = typeof __propDef.slots;
export default class IoLogoUsd extends SvelteComponentTyped<IoLogoUsdProps, IoLogoUsdEvents, IoLogoUsdSlots> {
}
export {};

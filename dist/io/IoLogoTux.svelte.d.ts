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
export type IoLogoTuxProps = typeof __propDef.props;
export type IoLogoTuxEvents = typeof __propDef.events;
export type IoLogoTuxSlots = typeof __propDef.slots;
export default class IoLogoTux extends SvelteComponentTyped<IoLogoTuxProps, IoLogoTuxEvents, IoLogoTuxSlots> {
}
export {};

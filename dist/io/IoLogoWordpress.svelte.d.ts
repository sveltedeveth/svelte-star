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
export type IoLogoWordpressProps = typeof __propDef.props;
export type IoLogoWordpressEvents = typeof __propDef.events;
export type IoLogoWordpressSlots = typeof __propDef.slots;
export default class IoLogoWordpress extends SvelteComponentTyped<IoLogoWordpressProps, IoLogoWordpressEvents, IoLogoWordpressSlots> {
}
export {};

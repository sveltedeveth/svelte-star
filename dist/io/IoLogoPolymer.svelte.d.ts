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
export type IoLogoPolymerProps = typeof __propDef.props;
export type IoLogoPolymerEvents = typeof __propDef.events;
export type IoLogoPolymerSlots = typeof __propDef.slots;
export default class IoLogoPolymer extends SvelteComponentTyped<IoLogoPolymerProps, IoLogoPolymerEvents, IoLogoPolymerSlots> {
}
export {};

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
export type IoLogoBufferProps = typeof __propDef.props;
export type IoLogoBufferEvents = typeof __propDef.events;
export type IoLogoBufferSlots = typeof __propDef.slots;
export default class IoLogoBuffer extends SvelteComponentTyped<IoLogoBufferProps, IoLogoBufferEvents, IoLogoBufferSlots> {
}
export {};

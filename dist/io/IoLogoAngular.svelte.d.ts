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
export type IoLogoAngularProps = typeof __propDef.props;
export type IoLogoAngularEvents = typeof __propDef.events;
export type IoLogoAngularSlots = typeof __propDef.slots;
export default class IoLogoAngular extends SvelteComponentTyped<IoLogoAngularProps, IoLogoAngularEvents, IoLogoAngularSlots> {
}
export {};

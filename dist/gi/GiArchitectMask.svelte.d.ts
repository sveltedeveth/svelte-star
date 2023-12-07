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
export type GiArchitectMaskProps = typeof __propDef.props;
export type GiArchitectMaskEvents = typeof __propDef.events;
export type GiArchitectMaskSlots = typeof __propDef.slots;
export default class GiArchitectMask extends SvelteComponentTyped<GiArchitectMaskProps, GiArchitectMaskEvents, GiArchitectMaskSlots> {
}
export {};

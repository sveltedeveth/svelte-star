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
export type GiJasonMaskProps = typeof __propDef.props;
export type GiJasonMaskEvents = typeof __propDef.events;
export type GiJasonMaskSlots = typeof __propDef.slots;
export default class GiJasonMask extends SvelteComponentTyped<GiJasonMaskProps, GiJasonMaskEvents, GiJasonMaskSlots> {
}
export {};

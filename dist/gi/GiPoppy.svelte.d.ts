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
export type GiPoppyProps = typeof __propDef.props;
export type GiPoppyEvents = typeof __propDef.events;
export type GiPoppySlots = typeof __propDef.slots;
export default class GiPoppy extends SvelteComponentTyped<GiPoppyProps, GiPoppyEvents, GiPoppySlots> {
}
export {};

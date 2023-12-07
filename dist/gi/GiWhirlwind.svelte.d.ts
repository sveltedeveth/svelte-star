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
export type GiWhirlwindProps = typeof __propDef.props;
export type GiWhirlwindEvents = typeof __propDef.events;
export type GiWhirlwindSlots = typeof __propDef.slots;
export default class GiWhirlwind extends SvelteComponentTyped<GiWhirlwindProps, GiWhirlwindEvents, GiWhirlwindSlots> {
}
export {};

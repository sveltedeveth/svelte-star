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
export type GiGolemHeadProps = typeof __propDef.props;
export type GiGolemHeadEvents = typeof __propDef.events;
export type GiGolemHeadSlots = typeof __propDef.slots;
export default class GiGolemHead extends SvelteComponentTyped<GiGolemHeadProps, GiGolemHeadEvents, GiGolemHeadSlots> {
}
export {};

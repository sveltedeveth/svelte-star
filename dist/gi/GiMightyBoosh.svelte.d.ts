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
export type GiMightyBooshProps = typeof __propDef.props;
export type GiMightyBooshEvents = typeof __propDef.events;
export type GiMightyBooshSlots = typeof __propDef.slots;
export default class GiMightyBoosh extends SvelteComponentTyped<GiMightyBooshProps, GiMightyBooshEvents, GiMightyBooshSlots> {
}
export {};

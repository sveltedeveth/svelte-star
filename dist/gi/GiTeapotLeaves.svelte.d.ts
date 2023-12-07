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
export type GiTeapotLeavesProps = typeof __propDef.props;
export type GiTeapotLeavesEvents = typeof __propDef.events;
export type GiTeapotLeavesSlots = typeof __propDef.slots;
export default class GiTeapotLeaves extends SvelteComponentTyped<GiTeapotLeavesProps, GiTeapotLeavesEvents, GiTeapotLeavesSlots> {
}
export {};

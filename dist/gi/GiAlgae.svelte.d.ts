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
export type GiAlgaeProps = typeof __propDef.props;
export type GiAlgaeEvents = typeof __propDef.events;
export type GiAlgaeSlots = typeof __propDef.slots;
export default class GiAlgae extends SvelteComponentTyped<GiAlgaeProps, GiAlgaeEvents, GiAlgaeSlots> {
}
export {};

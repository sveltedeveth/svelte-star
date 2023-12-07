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
export type GiRupeeProps = typeof __propDef.props;
export type GiRupeeEvents = typeof __propDef.events;
export type GiRupeeSlots = typeof __propDef.slots;
export default class GiRupee extends SvelteComponentTyped<GiRupeeProps, GiRupeeEvents, GiRupeeSlots> {
}
export {};

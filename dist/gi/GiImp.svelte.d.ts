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
export type GiImpProps = typeof __propDef.props;
export type GiImpEvents = typeof __propDef.events;
export type GiImpSlots = typeof __propDef.slots;
export default class GiImp extends SvelteComponentTyped<GiImpProps, GiImpEvents, GiImpSlots> {
}
export {};

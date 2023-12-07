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
export type GiInfestedMassProps = typeof __propDef.props;
export type GiInfestedMassEvents = typeof __propDef.events;
export type GiInfestedMassSlots = typeof __propDef.slots;
export default class GiInfestedMass extends SvelteComponentTyped<GiInfestedMassProps, GiInfestedMassEvents, GiInfestedMassSlots> {
}
export {};

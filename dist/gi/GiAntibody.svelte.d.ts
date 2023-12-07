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
export type GiAntibodyProps = typeof __propDef.props;
export type GiAntibodyEvents = typeof __propDef.events;
export type GiAntibodySlots = typeof __propDef.slots;
export default class GiAntibody extends SvelteComponentTyped<GiAntibodyProps, GiAntibodyEvents, GiAntibodySlots> {
}
export {};

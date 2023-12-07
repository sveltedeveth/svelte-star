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
export type GiSpectacleLensesProps = typeof __propDef.props;
export type GiSpectacleLensesEvents = typeof __propDef.events;
export type GiSpectacleLensesSlots = typeof __propDef.slots;
export default class GiSpectacleLenses extends SvelteComponentTyped<GiSpectacleLensesProps, GiSpectacleLensesEvents, GiSpectacleLensesSlots> {
}
export {};

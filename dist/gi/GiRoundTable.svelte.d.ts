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
export type GiRoundTableProps = typeof __propDef.props;
export type GiRoundTableEvents = typeof __propDef.events;
export type GiRoundTableSlots = typeof __propDef.slots;
export default class GiRoundTable extends SvelteComponentTyped<GiRoundTableProps, GiRoundTableEvents, GiRoundTableSlots> {
}
export {};

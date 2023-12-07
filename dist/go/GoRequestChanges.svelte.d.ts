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
export type GoRequestChangesProps = typeof __propDef.props;
export type GoRequestChangesEvents = typeof __propDef.events;
export type GoRequestChangesSlots = typeof __propDef.slots;
export default class GoRequestChanges extends SvelteComponentTyped<GoRequestChangesProps, GoRequestChangesEvents, GoRequestChangesSlots> {
}
export {};

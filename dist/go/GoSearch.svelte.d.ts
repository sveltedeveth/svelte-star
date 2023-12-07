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
export type GoSearchProps = typeof __propDef.props;
export type GoSearchEvents = typeof __propDef.events;
export type GoSearchSlots = typeof __propDef.slots;
export default class GoSearch extends SvelteComponentTyped<GoSearchProps, GoSearchEvents, GoSearchSlots> {
}
export {};

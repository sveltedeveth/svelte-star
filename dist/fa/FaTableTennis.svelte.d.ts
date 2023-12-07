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
export type FaTableTennisProps = typeof __propDef.props;
export type FaTableTennisEvents = typeof __propDef.events;
export type FaTableTennisSlots = typeof __propDef.slots;
export default class FaTableTennis extends SvelteComponentTyped<FaTableTennisProps, FaTableTennisEvents, FaTableTennisSlots> {
}
export {};

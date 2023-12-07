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
export type GoTrashcanProps = typeof __propDef.props;
export type GoTrashcanEvents = typeof __propDef.events;
export type GoTrashcanSlots = typeof __propDef.slots;
export default class GoTrashcan extends SvelteComponentTyped<GoTrashcanProps, GoTrashcanEvents, GoTrashcanSlots> {
}
export {};

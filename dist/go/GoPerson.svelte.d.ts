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
export type GoPersonProps = typeof __propDef.props;
export type GoPersonEvents = typeof __propDef.events;
export type GoPersonSlots = typeof __propDef.slots;
export default class GoPerson extends SvelteComponentTyped<GoPersonProps, GoPersonEvents, GoPersonSlots> {
}
export {};

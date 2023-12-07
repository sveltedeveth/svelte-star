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
export type GiClickProps = typeof __propDef.props;
export type GiClickEvents = typeof __propDef.events;
export type GiClickSlots = typeof __propDef.slots;
export default class GiClick extends SvelteComponentTyped<GiClickProps, GiClickEvents, GiClickSlots> {
}
export {};

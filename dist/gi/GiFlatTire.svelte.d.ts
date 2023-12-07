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
export type GiFlatTireProps = typeof __propDef.props;
export type GiFlatTireEvents = typeof __propDef.events;
export type GiFlatTireSlots = typeof __propDef.slots;
export default class GiFlatTire extends SvelteComponentTyped<GiFlatTireProps, GiFlatTireEvents, GiFlatTireSlots> {
}
export {};

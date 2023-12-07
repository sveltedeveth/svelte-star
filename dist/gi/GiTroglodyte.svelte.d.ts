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
export type GiTroglodyteProps = typeof __propDef.props;
export type GiTroglodyteEvents = typeof __propDef.events;
export type GiTroglodyteSlots = typeof __propDef.slots;
export default class GiTroglodyte extends SvelteComponentTyped<GiTroglodyteProps, GiTroglodyteEvents, GiTroglodyteSlots> {
}
export {};

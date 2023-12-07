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
export type GiTec9Props = typeof __propDef.props;
export type GiTec9Events = typeof __propDef.events;
export type GiTec9Slots = typeof __propDef.slots;
export default class GiTec9 extends SvelteComponentTyped<GiTec9Props, GiTec9Events, GiTec9Slots> {
}
export {};

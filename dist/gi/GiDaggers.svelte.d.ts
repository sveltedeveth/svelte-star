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
export type GiDaggersProps = typeof __propDef.props;
export type GiDaggersEvents = typeof __propDef.events;
export type GiDaggersSlots = typeof __propDef.slots;
export default class GiDaggers extends SvelteComponentTyped<GiDaggersProps, GiDaggersEvents, GiDaggersSlots> {
}
export {};

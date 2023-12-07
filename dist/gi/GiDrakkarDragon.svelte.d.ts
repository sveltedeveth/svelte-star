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
export type GiDrakkarDragonProps = typeof __propDef.props;
export type GiDrakkarDragonEvents = typeof __propDef.events;
export type GiDrakkarDragonSlots = typeof __propDef.slots;
export default class GiDrakkarDragon extends SvelteComponentTyped<GiDrakkarDragonProps, GiDrakkarDragonEvents, GiDrakkarDragonSlots> {
}
export {};

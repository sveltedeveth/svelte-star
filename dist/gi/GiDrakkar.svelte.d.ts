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
export type GiDrakkarProps = typeof __propDef.props;
export type GiDrakkarEvents = typeof __propDef.events;
export type GiDrakkarSlots = typeof __propDef.slots;
export default class GiDrakkar extends SvelteComponentTyped<GiDrakkarProps, GiDrakkarEvents, GiDrakkarSlots> {
}
export {};

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
export type GiSerratedSlashProps = typeof __propDef.props;
export type GiSerratedSlashEvents = typeof __propDef.events;
export type GiSerratedSlashSlots = typeof __propDef.slots;
export default class GiSerratedSlash extends SvelteComponentTyped<GiSerratedSlashProps, GiSerratedSlashEvents, GiSerratedSlashSlots> {
}
export {};

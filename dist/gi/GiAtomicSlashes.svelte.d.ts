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
export type GiAtomicSlashesProps = typeof __propDef.props;
export type GiAtomicSlashesEvents = typeof __propDef.events;
export type GiAtomicSlashesSlots = typeof __propDef.slots;
export default class GiAtomicSlashes extends SvelteComponentTyped<GiAtomicSlashesProps, GiAtomicSlashesEvents, GiAtomicSlashesSlots> {
}
export {};

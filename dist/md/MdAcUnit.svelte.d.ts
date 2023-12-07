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
export type MdAcUnitProps = typeof __propDef.props;
export type MdAcUnitEvents = typeof __propDef.events;
export type MdAcUnitSlots = typeof __propDef.slots;
export default class MdAcUnit extends SvelteComponentTyped<MdAcUnitProps, MdAcUnitEvents, MdAcUnitSlots> {
}
export {};

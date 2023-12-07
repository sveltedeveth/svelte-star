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
export type MdTrainProps = typeof __propDef.props;
export type MdTrainEvents = typeof __propDef.events;
export type MdTrainSlots = typeof __propDef.slots;
export default class MdTrain extends SvelteComponentTyped<MdTrainProps, MdTrainEvents, MdTrainSlots> {
}
export {};

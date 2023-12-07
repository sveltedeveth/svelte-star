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
export type IoMdTrainProps = typeof __propDef.props;
export type IoMdTrainEvents = typeof __propDef.events;
export type IoMdTrainSlots = typeof __propDef.slots;
export default class IoMdTrain extends SvelteComponentTyped<IoMdTrainProps, IoMdTrainEvents, IoMdTrainSlots> {
}
export {};

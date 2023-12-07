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
export type IoIosTrainProps = typeof __propDef.props;
export type IoIosTrainEvents = typeof __propDef.events;
export type IoIosTrainSlots = typeof __propDef.slots;
export default class IoIosTrain extends SvelteComponentTyped<IoIosTrainProps, IoIosTrainEvents, IoIosTrainSlots> {
}
export {};

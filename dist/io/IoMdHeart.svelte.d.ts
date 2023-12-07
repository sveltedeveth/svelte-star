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
export type IoMdHeartProps = typeof __propDef.props;
export type IoMdHeartEvents = typeof __propDef.events;
export type IoMdHeartSlots = typeof __propDef.slots;
export default class IoMdHeart extends SvelteComponentTyped<IoMdHeartProps, IoMdHeartEvents, IoMdHeartSlots> {
}
export {};

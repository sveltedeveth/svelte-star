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
export type TiTimesProps = typeof __propDef.props;
export type TiTimesEvents = typeof __propDef.events;
export type TiTimesSlots = typeof __propDef.slots;
export default class TiTimes extends SvelteComponentTyped<TiTimesProps, TiTimesEvents, TiTimesSlots> {
}
export {};

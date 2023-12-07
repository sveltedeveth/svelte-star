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
export type TiInfoProps = typeof __propDef.props;
export type TiInfoEvents = typeof __propDef.events;
export type TiInfoSlots = typeof __propDef.slots;
export default class TiInfo extends SvelteComponentTyped<TiInfoProps, TiInfoEvents, TiInfoSlots> {
}
export {};

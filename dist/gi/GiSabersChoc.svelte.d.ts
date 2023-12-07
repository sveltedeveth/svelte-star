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
export type GiSabersChocProps = typeof __propDef.props;
export type GiSabersChocEvents = typeof __propDef.events;
export type GiSabersChocSlots = typeof __propDef.slots;
export default class GiSabersChoc extends SvelteComponentTyped<GiSabersChocProps, GiSabersChocEvents, GiSabersChocSlots> {
}
export {};

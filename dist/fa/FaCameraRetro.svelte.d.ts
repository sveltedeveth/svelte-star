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
export type FaCameraRetroProps = typeof __propDef.props;
export type FaCameraRetroEvents = typeof __propDef.events;
export type FaCameraRetroSlots = typeof __propDef.slots;
export default class FaCameraRetro extends SvelteComponentTyped<FaCameraRetroProps, FaCameraRetroEvents, FaCameraRetroSlots> {
}
export {};

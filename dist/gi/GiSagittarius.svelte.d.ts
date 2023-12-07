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
export type GiSagittariusProps = typeof __propDef.props;
export type GiSagittariusEvents = typeof __propDef.events;
export type GiSagittariusSlots = typeof __propDef.slots;
export default class GiSagittarius extends SvelteComponentTyped<GiSagittariusProps, GiSagittariusEvents, GiSagittariusSlots> {
}
export {};

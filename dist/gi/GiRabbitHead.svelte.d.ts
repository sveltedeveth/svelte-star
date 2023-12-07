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
export type GiRabbitHeadProps = typeof __propDef.props;
export type GiRabbitHeadEvents = typeof __propDef.events;
export type GiRabbitHeadSlots = typeof __propDef.slots;
export default class GiRabbitHead extends SvelteComponentTyped<GiRabbitHeadProps, GiRabbitHeadEvents, GiRabbitHeadSlots> {
}
export {};

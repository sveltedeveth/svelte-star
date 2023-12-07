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
export type GiRabbitProps = typeof __propDef.props;
export type GiRabbitEvents = typeof __propDef.events;
export type GiRabbitSlots = typeof __propDef.slots;
export default class GiRabbit extends SvelteComponentTyped<GiRabbitProps, GiRabbitEvents, GiRabbitSlots> {
}
export {};

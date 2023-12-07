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
export type GiPlasticDuckProps = typeof __propDef.props;
export type GiPlasticDuckEvents = typeof __propDef.events;
export type GiPlasticDuckSlots = typeof __propDef.slots;
export default class GiPlasticDuck extends SvelteComponentTyped<GiPlasticDuckProps, GiPlasticDuckEvents, GiPlasticDuckSlots> {
}
export {};

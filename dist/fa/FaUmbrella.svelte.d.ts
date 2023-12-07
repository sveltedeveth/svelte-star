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
export type FaUmbrellaProps = typeof __propDef.props;
export type FaUmbrellaEvents = typeof __propDef.events;
export type FaUmbrellaSlots = typeof __propDef.slots;
export default class FaUmbrella extends SvelteComponentTyped<FaUmbrellaProps, FaUmbrellaEvents, FaUmbrellaSlots> {
}
export {};
